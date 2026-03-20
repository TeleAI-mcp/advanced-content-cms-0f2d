// Export module for content management system
export class ContentExporter {
  constructor() {
    this.format = 'json';
  }
  
  export(contents) {
    return JSON.stringify(contents, null, 2);
  }
}