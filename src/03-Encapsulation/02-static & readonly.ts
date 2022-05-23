export class Message {
  public readonly id: string;
  title: string;
  message: string;
  isSent: boolean;

  constructor(id: string){
    this.id = id;
  }
}

export class Messages extends Array<Message> {
  public getValidMessages(messages: Message[]): Message[] {
    return this.filter((value: Message) => value.message.trim().length > 0);
  }

  public static getValidMessages(messages: Message[]): Message[] {
    return messages.filter((value: Message) => value.message.trim().length > 0);
  }
}

Messages.getValidMessages([]);

const message = new Message('adsfsd');

// Error
// message.id = 'dsaf';