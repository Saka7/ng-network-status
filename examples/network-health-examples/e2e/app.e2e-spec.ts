import { NetworkHealthExamplesPage } from './app.po';

describe('network-health-examples App', () => {
  let page: NetworkHealthExamplesPage;

  beforeEach(() => {
    page = new NetworkHealthExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
