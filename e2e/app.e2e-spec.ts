import { AppPage } from './app.po';

describe('angular-mean-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hi Venkatesh!!! This is Angular 2 application with node js.');
  });
});
