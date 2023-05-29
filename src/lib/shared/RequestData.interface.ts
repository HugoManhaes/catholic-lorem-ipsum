export default RequestData;

/**
 * Represents the data passed in an Api request to retrieve the catholic lorem ipsum.
 */
interface RequestData {
    /** The quantity of catholic lorem ipsum paragraphs requested by the user. */
    paragraphs: string[];
}