function NavBar() {
  return (
    <div className="w-full h-16 bg-blue-500">
      <div className="flex justify-center items-center h-full space-x-8">
        <p className="text-white cursor-pointer">Menu</p>
        <p className="text-white cursor-pointer">Orders</p>
        <p className="text-white cursor-pointer">Cart</p>
        <p className="text-white cursor-pointer">Wishlist</p>
      </div>
    </div>
  );
}

export default NavBar;
