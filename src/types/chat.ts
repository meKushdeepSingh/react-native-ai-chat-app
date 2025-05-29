/**
 * @typedef {Object} ChatMessageSender
 * Represents the sender of a chat message.
 * 'user' for messages sent by the current user.
 * 'ai' for messages received from the AI.
 * 'system' for system-generated messages (e.g., "User joined").
 */
export type ChatMessageSender = 'user' | 'ai' | 'system';

/**
 * @interface ChatMessage
 * Defines the structure for a single chat message.
 */
export interface ChatMessage {
  /**
   * A unique identifier for the message.
   * This is crucial for FlatList `keyExtractor` and for managing messages.
   */
  id: string;

  /**
   * The actual text content of the message.
   */
  text: string;

  /**
   * The sender of the message.
   * Uses the `ChatMessageSender` type.
   */
  sender: ChatMessageSender;

  /**
   * The timestamp when the message was sent or received.
   * It can be a Date object for easy sorting and formatting,
   * or a string if you prefer to store it pre-formatted.
   * Using Date is generally recommended for internal logic.
   */
  timestamp: Date | string;

  /**
   * Optional: URL to an image attachment.
   */
  imageUrl?: string;

  /**
   * Optional: URL to a video attachment.
   */
  videoUrl?: string;

  /**
   * Optional: Status of the message (e.g., 'sent', 'delivered', 'read', 'failed').
   * Useful for displaying delivery indicators.
   */
  status?: 'sending' | 'sent' | 'delivered' | 'read' | 'failed';

  /**
   * Optional: Any additional data specific to the message.
   * This could be for custom message types or metadata.
   */
  metadata?: Record<string, any>;
}

/**
 * @typedef {ChatMessage[]} ChatConversation
 * Represents a collection of chat messages, forming a conversation.
 * This is typically an array of `ChatMessage` objects.
 */
export type ChatConversation = ChatMessage[];

/**
 * @interface ChatState
 * Defines the structure for the overall chat state,
 * particularly useful for state management (e.g., React Context, Redux, Zustand).
 */
export interface ChatState {
  /**
   * The array of messages in the current conversation.
   */
  messages: ChatConversation;

  /**
   * Optional: The current input text typed by the user.
   */
  currentInput: string;

  /**
   * Optional: Loading state, e.g., when waiting for an AI response.
   */
  isLoading: boolean;

  /**
   * Optional: Any error message to display.
   */
  error: string | null;

  /**
   * Optional: ID of the user currently logged in or identified.
   */
  userId?: string;

  /**
   * Optional: ID of the current chat session or room.
   */
  chatSessionId?: string;
}
