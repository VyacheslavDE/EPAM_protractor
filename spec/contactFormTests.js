// Given user arrives on the https://www.epam.com/
// When user click on “Contact Us” button
// And fill the form and checkboxes
// And press “Submit” button
// Then error occurs
// 1)	Leave “HOW DID YOU HEAR ABOUT EPAM?*” dropdown control field empty
// 2)	Leave “Personal Data” checkbox empty
// 3)	Leave “Name” field empty


describe('EPAM "Contac us" form demo test', function(){

    it('Check the "Contact us" form', function(){
    
            browser.waitForAngularEnabled(false);
            browser.driver.manage().window().maximize();
            browser.get('https://www.epam.com/');
        
            const sleep = ms => {
                 return new Promise(resolve => {setTimeout(() => resolve(), ms)})
            }
                async function checkFillingOfTheForm(){
                    
                    var EC = protractor.ExpectedConditions;

                    try{
                        await sleep(2000);
                        const contactUsButton = await element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"));
                        await contactUsButton.click();
                        
                        await browser.wait(EC.elementToBeClickable(
                            element(by.xpath("//span[contains(text(),'General Information Request')]"))), 5000);

                        const resonForInquiryDropdown = await element(by.xpath("//span[contains(text(),'General Information Request')]"));
                        await resonForInquiryDropdown.click();
                        const genInfoRequestOption = await element(by.xpath("//li[contains(text(),'General Information Request')]"));
                        await genInfoRequestOption.click();
                        const firstNameField = await element(by.xpath("//input[@placeholder='First Name*']"));
                        await firstNameField.sendKeys("Vasya");
                        const lastNameField = await element(by.xpath("//input[@placeholder='Last Name*']"));
                        await lastNameField.sendKeys("Pupkin");
                        const emailField = await element(by.xpath("//input[@placeholder='Email*']"));
                        await emailField.sendKeys("vasya_pupkin@gmail.com");
                        const phoneField = await element(by.xpath("//input[@placeholder='Phone*']"));
                        await phoneField.sendKeys("+380988888888");

                        // await browser.wait(EC.elementToBeClickable(element(by.xpath("(//span[@class='select2-selection__rendered'])[6]"))), 10000);
                        // const howDidYouHearDropdown = await element(by.xpath("(//span[@class='select2-selection__rendered'])[6]"));
                        // await howDidYouHearDropdown.click(); 

                        // const eventOption = await element(by.xpath("//li[contains(text(),'Event')]"));
                        // await eventOption.click();
                        // const consentCheckbox = await element(by.xpath("//label[@for='new_form_gdprConsent']")); 
                        // await browser.wait(EC.elementToBeClickable(consentCheckbox), 5000);
                        // await consentCheckbox.click();
                        await browser.wait(EC.elementToBeClickable(by.xpath("//button[@type = 'submit']")), 5000);
                        const submitButton = await element(by.xpath("//button[@type = 'submit']"));
                        await submitButton.click();
                        await browser.manage().timeouts().implicitlyWait(3000);
                        const errorMessage = await element.all(by.xpath("//span[text() = 'This is a required field']"));
                        expect(await errorMessage.count()).toBe(1);
                        
                    }
                    catch (e){ 
                        console.error('Error: ', e);
                    } 
                }

                checkFillingOfTheForm();
            })
        })