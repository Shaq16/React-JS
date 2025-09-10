import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to EcoFinds</h1>
      </main>
      <Footer />
    </div>
  );
}
