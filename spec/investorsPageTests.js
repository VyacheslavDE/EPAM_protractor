describe('EPAM website demo test', function(){

it('Check the correct order of the elements on "Investors" page', function(){
    
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://www.epam.com/');

    const sleep = ms => {
         return new Promise(resolve => {setTimeout(() => resolve(), ms)})
    }
        async function checkElementsOnInvestorsPage(){

            try{
                await sleep(3000);
                const investorsButton = await element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
                await investorsButton.click();
                expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors');
                await browser.manage().timeouts().implicitlyWait(3000);
                const menuList = await element.all(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'));
                expect( await menuList[0].getText()).toBe('tock Price');
                expect( await menuList[menuList.length - 1].getText()).toBe('Contact Investor Relations');
            }
            catch(e){
                console.error('Error: ', e);
            }
        }

        checkElementsOnInvestorsPage();

        async function checkNewsOnInvestorsPage(){
            
            var EC = protractor.ExpectedConditions;
            
            try{
                await sleep(3000);
                const investorsButton = await element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
                await investorsButton.click();
                expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors');
                await browser.wait(EC.presenceOf(
                element(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'))), 3000);     
                const menuList = await element.all(by.xpath('//div[@class = "field-content"]/a[@hreflang]'));
                expect( await menuList[0].getText()).toBe("PAM Named a Leader in NelsonHall's 2020 NEAT Vendor Evaluation Process for Overall Quality Engineering Services");
                expect( await menuList[1].getText()).toBe("PAM Announces Date for Third Quarter 2020 Earnings Release and Conference Call");
            }
            catch(e){
                console.error('Error: ', e);
            }
        }

        checkNewsOnInvestorsPage();

    })
    
    it('Check the web-site search', function(){

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.epam.com/');

        const sleep = ms => {
            return new Promise(resolve => {setTimeout(() => resolve(), ms)});
        }
            async function checkTheWebSiteSearch(){

                var EC = protractor.ExpectedConditions;

                try{
                    await sleep(3000);
                    const searchButton = await element(by.xpath('//button[@class = "header-search__button header__icon"]'));
                    await searchButton.click();
                    const searchField = await element(by.xpath('//input[@id = "new_form_search"]'));
                    await browser.manage().timeouts().implicitlyWait(3000);
                    await searchField.sendKeys('Investors');
                    await searchField.submit();
                    // const findButton = await element(by.xpath('header-search__submit'));
                    // await findButton.click();
                    await browser.manage().timeouts().implicitlyWait(3000);
                    // expect( await browser.getCurrentUrl() === 'https://www.epam.com/search?q=investiors');

                    const searchResultTitlesList = await element.all(by.xpath('//a[@class = "search-results__title-link"]'));
                    const searchResultParagraphsList = await element.all(by.xpath('//p[@class = "search-results__description"]'));
                    await searchResultTitlesList.forEach((item) => { return expect(item.getText()).toContain('Investor')})
                    // await searchResultParagraphsList.forEach(item => { return expect(item.getText()).toContain('Investors')})
                    
                }
                
                catch(e){
                    console.error('Error: ', e);
                }
            }

            checkTheWebSiteSearch();
    });


    });

