import React from "react";

// function Card(props){
//     return(
//     <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
//   <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=" alt="" />
//   <div class="space-y-2 text-center sm:text-left">
//     <div class="space-y-0.5">
//       <p class="text-lg font-semibold text-black">{props.name}</p>
//       <p class="font-medium text-gray-500">Product Engineer</p>
//     </div>
//     <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
//       {props.btnText}
//     </button>
//   </div>
// </div>
//     )
// }

function Card({name="XYZ",btnText="Visit Me"}){
    return(
    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=" alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">{name}</p>
      <p class="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      {btnText}
    </button>
  </div>
</div>
    )
}
export default Card;