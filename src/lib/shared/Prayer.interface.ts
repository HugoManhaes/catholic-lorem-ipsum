export default Prayer;

/**
 * Represents a prayer, has a name, content and word count.
 */
interface Prayer{
    /** The name of the prayer. */
    prayerName: string;
    /** The content of the prayer, as in, the prayer itself. */
    prayerContent: string;
    /** The word count of the prayer content. Helps in determining how many prayers will be in the paragraph. */
    wordCount: number;
}