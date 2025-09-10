import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom"; // ✅ use react-router-dom instead of next/link

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

// ------------------- Schema -------------------
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

// ------------------- Component -------------------
export default function AuthForm({ type }) {
  const { signIn, signUp, loading } = useAuth();
  const isLogin = type === "login";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    if (isLogin) {
      signIn(values.email, values.password);
    } else {
      signUp(values.email, values.password);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </CardTitle>
        <CardDescription>
          {isLogin
            ? "Sign in to continue to EcoFinds."
            : "Join our community of sustainable shoppers."}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[var(--accent)] text-[var(--accent-foreground)]"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : isLogin ? (
                "Log In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>

        {/* Login / Signup Toggle */}
        <div className="mt-6 text-center text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link
            to={isLogin ? "/signup" : "/login"} // ✅ react-router-dom uses "to" instead of "href"
            className="font-semibold text-primary hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
