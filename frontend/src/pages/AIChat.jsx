import { ChatInput } from '@/components/chat/ChatInput';
import { MessageEntry } from '@/components/chat/MessageEntry';

export function AIChat() {

  return (
    <>
      <div className="flex flex-col justify-between w-full h-[calc(100dvh)] px-4 md:px-2 sm:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className='flex-1 overflow-hidden'>
          <MessageEntry />
          <MessageEntry />
          <MessageEntry />
        </div>
        <ChatInput />
      </div>

    </>
  );
}
