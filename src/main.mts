export interface Tag {
  "Contract Address": string;
  "Public Name Tag": string;
  "Project Name": string;
  "UI/Website Link": string;
  "Public Note": string;
}

export interface ITagService {
  returnTags(chainId: string, apiKey: string): Promise<Tag[]>;
}
