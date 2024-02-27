import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from '@/components/darkmode-toggle';

export function ChatInput() {
  return (
    <div className="flex w-[calc(100%-0.5rem)] flex-row gap-3 last:mb-5 md:px-10 lg:px-0">
      <DarkModeToggle />
      <Textarea className="text-base resize-none focus-visible:ring-transparent" placeholder="Enter your message..."></Textarea>
      <Button type="submit" size="icon" className="mt-0.5 float-end">
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
}
