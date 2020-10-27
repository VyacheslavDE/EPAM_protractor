describe('EPAM website demo test', function(){

it('1.	To check the correct order of the button list on the investors page', function(){
    
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
    })

    
it('2.	To check the button of the Stock Price', function(){
    
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://www.epam.com/');

    const sleep = ms => {
         return new Promise(resolve => {setTimeout(() => resolve(), ms)})
    }
        async function checkNewsOnInvestorsPage(){
            
            var EC = protractor.ExpectedConditions;
            
            try{
                await sleep(3000);
                const investorsButton = await element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
                await investorsButton.click();
                expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors');
                await browser.wait(EC.presenceOf(
                element(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'))), 3000);     
                const menuList = await element.all(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'));
                await menuList[0].click();
                expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors/stock-price');
            }
            catch(e){
                console.error('Error: ', e);
            }
        }


    })

    it('3.	To check the news order in the News section', function(){

        
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://www.epam.com/');

    const sleep = ms => {
         return new Promise(resolve => {setTimeout(() => resolve(), ms)})
    }
        async function checkNewsOnInvestorsPage(){
            
            var EC = protractor.ExpectedConditions;
            
            try{
                await sleep(3000);
                const investorsButton = await element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
                await investorsButton.click();
                expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors');
                await browser.wait(EC.presenceOf(
                element(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'))), 3000);     
                const newsList = await element.all(by.xpath('//div[@class = "field-content"]/a[@hreflang]'));
                expect( await newsList[0].getText()).toBe("PAM Named a Leader in NelsonHall's 2020 NEAT Vendor Evaluation Process for Overall Quality Engineering Services");
                expect( await newsList[1].getText()).toBe("PAM Announces Date for Third Quarter 2020 Earnings Release and Conference Call");
            }
            catch(e){
                console.error('Error: ', e);
            }
        }

    })

    it('4.	To check the Epam management buttons presence', function(){
                
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://www.epam.com/');

    const sleep = ms => {
         return new Promise(resolve => {setTimeout(() => resolve(), ms)})
    }
        async function checkEpamManagementButton(){
                    
            try{
                await sleep(3000);
                const investorsButton = await element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
                await investorsButton.click();
                expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors');
                await browser.manage().timeouts().implicitlyWait(3000);
                const managementButtonList = await element.all(by.xpath('//a[@class="president__link"]'));
                expect( await managementButtonList[0].getText()).toBe("Board of Directors");
                expect( await managementButtonList[1].getText()).toBe("Executive Management");
            }
            catch(e){
                console.error('Error: ', e);
            }
        }

    })

    it('5. To check  the Board of Directors button', function(){
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.epam.com/');
    
        const sleep = ms => {
             return new Promise(resolve => {setTimeout(() => resolve(), ms)})
        }
            async function checkNewsOnInvestorsPage(){
                
                var EC = protractor.ExpectedConditions;
                
                try{
                    await sleep(3000);
                    const investorsButton = await element(by.xpath('//li[@class="footer__links-container item--piped"]/a[text() ="Investors"]'));
                    await investorsButton.click();
                    expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors');
                    await browser.wait(EC.presenceOf(
                    element(by.xpath('//ul[@class="in-page-navigation__list in-page-navigation--padding-normal"]//a'))), 3000);     
                    const managementButtonList = await element.all(by.xpath('//a[@class="president__link"]'));
                    expect( await managementButtonList[0].getText()).toBe("Board of Directors");
                    await managementButtonList[0].click();
                    expect( await browser.getCurrentUrl() === 'https://investors.epam.com/investors/leadership-and-governance#directors');
                }
                catch(e){
                    console.error('Error: ', e);
                }
            }
    })

    });

