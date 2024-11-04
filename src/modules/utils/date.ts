export function formatLastSeen(lastSeen: string): string {
    const year = lastSeen.slice(0, 4); // YYYY
    const month = lastSeen.slice(4, 6); // MM
    const day = lastSeen.slice(6, 8); // DD
    const hours = lastSeen.slice(9, 11); // HH
    const minutes = lastSeen.slice(11, 13); // mm
    const seconds = lastSeen.slice(13, 15); // ss

    const formattedLastSeen = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    const lastSeenDate = new Date(formattedLastSeen);

    if (isNaN(lastSeenDate.getTime())) {
        return 'Invalid date';
    }

    const now = new Date();
    const diffMs = now.getTime() - lastSeenDate.getTime();

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffDays > 0) {
        return `${diffDays} day(s) ago`;
    } else if (diffHours > 0) {
        return `${diffHours} hour(s) ago`;
    } else {
        return `${diffMinutes} minute(s) ago`;
    }
}
