const YT_CONFIG = {
  baseUrl: 'https://www.googleapis.com/youtube/v3',
  searchQuery: '/search?key=%key&type=video&maxResults=15&q=',
  videoQuery: '/videos?key=%key&id=%id&part=snippet,statistics',
};

export default YT_CONFIG;
