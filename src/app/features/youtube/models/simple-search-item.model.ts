export default interface ISimpleSearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
}
