import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MessageEntry({ name, message }) {
  return (
    <>
      <div className="flex flex-row my-2 p-5 mx-auto w-full">
        {/* This is a placeholder for a profile picture if we want that. */}
        <Avatar>
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="mx-6 flex flex-col">
          <div className="font-bold"> {name ? name : "You"}</div>
          <div className="">{message ? message : "PlaceholderMessage"}</div>
        </div>
      </div>
      <hr class="border-dashed mx-20 border-gray-200 dark:border-gray-600" />
    </>
  );
}
