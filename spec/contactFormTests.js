describe('EPAM "Contac us" form demo test', function(){

    it('1. To check the "Contact us" button', function(){
        
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.epam.com/');
    
        const sleep = ms => {
             return new Promise(resolve => {setTimeout(() => resolve(), ms)})
        }
            async function checkContactUsButton(){
                
                var EC = protractor.ExpectedConditions;

                try{
                    await sleep(3000);
                    const contactUsButton = await element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"));
                    await contactUsButton.click();
                    expect (await browser.getCurrentUrl() === 'https://www.epam.com/about/who-we-are/contact');
                }
                catch(e){
                    console.error(e);
                }    
            }
        })

    
    it('2.	To check the ability to fill all form fields with text', function(){

            
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.epam.com/');
    
        const sleep = ms => {
             return new Promise(resolve => {setTimeout(() => resolve(), ms)})
        }
            async function checkFillingOfTheForm(){
                
                var EC = protractor.ExpectedConditions;

                try{
                    await sleep(3000);
                    const contactUsButton = await element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"));
                    await contactUsButton.click();

                    //Fill combo-boxes
                    const formComboBoxes = ['General Information Request', 'Position', 'Ukraine', 'Kyiv'];
                    const formComboBoxesOptions = ['General Information Request', 'C-Level', 'Ukraine', 'Kyiv'];
                    await formComboBoxes.forEach((value, index) => {
                        await element(by.xpath("//span[contains(text(), '" + value + "']")).click();
                        await element(by.xpath("//li[contains(text(),'" + formComboBoxesOptions[index] + "')]")).click();
                    })                   

                    const howDidYouHearDropdown = await element(by.xpath("(//span[@class='select2-selection__rendered'])[6]"));
                    await howDidYouHearDropdown.click(); 
                    const eventOption = await element(by.xpath("//*[@id='select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results']"));
                    await eventOption.click();

                    //Fill fields
                    var formFields = ['First Name*', 'Last Name*', 'Email*', 'Phone*', 'Company'];
                    var valuesForForm = ["Vasya", "Pupkin", "vasya_pupkin@gmail.com", "+380988888888", "ABC", "No comments"]
                    await formFields.forEach((value, index) => {
                        await element(by.xpath("//input[@placeholder='" + value + "']")).sendKeys(valuesForForm[index]);
                    })

                    const commentsField = await element(by.xpath("//textarea[@placeholder='Your inquiry or comments']"));
                    await commentsField.sendKeys(valuesForForm[valuesForForm.length - 1]);

                    //Fill checkboxes 
                    const checkboxes = await element.all(by.xpath("//label[@class='checkbox__label checkbox-custom-label checkbox__label-text']"))
                    await checkboxes.forEach((item) => {
                        item.click();
                    })
                    
                    const errorMessage = await element.all(by.xpath("//span[text() = 'This is a required field']"));
                    expect(await errorMessage.isPresent()).toBe(false);
                }
                    catch(e){
                        console.error(e)
                    }
                }
    })

    it('3.	To check the obligatory filling of the fields with *', function(){
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.epam.com/');
    
        const sleep = ms => {
             return new Promise(resolve => {setTimeout(() => resolve(), ms)})
        }
            async function checkFillingOfTheForm(){
                
                var EC = protractor.ExpectedConditions;

                try{
                    await sleep(3000);
                    const contactUsButton = await element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"));
                    await contactUsButton.click();

                    //Fill fields
                    var formFields = ['First Name*', 'Last Name*', 'Email*', 'Phone*', 'Company'];
                    
                    await formFields.forEach((value) => {
                        await element(by.xpath("//input[@placeholder='" + value + "']")).click();
                    })

                    const commentsField = await element(by.xpath("//textarea[@placeholder='Your inquiry or comments']"));
                    await commentsField.sendKeys(valuesForForm[valuesForForm.length - 1]);
                    
                    const errorMessage = await element.all(by.xpath('//div[@class="text-field-ui validation-field"]/span[@class="validation-tooltip"]'));
                    expect(await errorMessage.count()).toBe(4);
                }
                    catch(e){
                        console.error(e)
                    }
                }
    })

    it('4.	To check for errors for empty fields', function(){
    
            browser.waitForAngularEnabled(false);
            browser.driver.manage().window().maximize();
            browser.get('https://www.epam.com/');
        
            const sleep = ms => {
                 return new Promise(resolve => {setTimeout(() => resolve(), ms)})
            }
                async function checkFillingOfTheForm(){
                    
                    var EC = protractor.ExpectedConditions;

                    try {
                    await sleep(3000);
                    const contactUsButton = await element(by.xpath("//a[@class = 'cta-button-ui cta-button--envelope header__control']"));
                    await contactUsButton.click();

                    //Fill combo-boxes
                    const formComboBoxes = ['General Information Request', 'Position', 'Ukraine', 'Kyiv'];
                    const formComboBoxesOptions = ['General Information Request', 'C-Level', 'Ukraine', 'Kyiv'];
                    await formComboBoxes.forEach((value, index) => {
                        await element(by.xpath("//span[contains(text(), '" + value + "']")).click();
                        await element(by.xpath("//li[contains(text(),'" + formComboBoxesOptions[index] + "')]")).click();
                    })                   

                    const howDidYouHearDropdown = await element(by.xpath("(//span[@class='select2-selection__rendered'])[6]"));
                    await howDidYouHearDropdown.click(); 
                    const eventOption = await element(by.xpath("//*[@id='select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results']"));
                    await eventOption.click();

                    //Fill fields
                    var formFields = ['First Name*', 'Last Name*', 'Email*', 'Phone*', 'Company'];
                    var valuesForForm = ["Vasya", "Pupkin", "vasya_pupkin@gmail.com", "+380988888888", "ABC", "No comments"]
                    await formFields.forEach((value, index) => {
                        await element(by.xpath("//input[@placeholder='" + value + "']")).sendKeys(valuesForForm[index]);
                    })

                    const commentsField = await element(by.xpath("//textarea[@placeholder='Your inquiry or comments']"));
                    await commentsField.sendKeys(valuesForForm[valuesForForm.length - 1]);

                    // await browser.wait(EC.elementToBeClickable(element(by.xpath("(//span[@class='select2-selection__rendered'])[6]"))), 10000);
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
            })
        })