export interface Items {
  items: [
    {
      id: string;
      snippet: {
        title: string;
        description: string;
        thumbnails: {
          high: {
            url: string;
          };
          maxres: {
            url: string;
          };
        };
        resourceId: {
          videoId: string;
        };
      };
    },
  ];
}
export interface Item {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}
export interface Snippet {
  title: string;
  description: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
  resourceId: {
    videoId: string;
  };
}
