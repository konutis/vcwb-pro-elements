# VCWB Pro Elements


## How to use elements?
- Download free or premium version of Visual Composer Website Builder - https://visualcomposer.com/
- Install VCWB on Wordpress
- Download VCWB Pro Elements as a zip file
- Install it on Wordpress
- Add any Pro Element from VCWB plugin


## Elements:
- proScrollToTopButton
- proHeading
- proModalBox


## Additional element usage
### proModalBox
After adding this element you will not see it because it is hidden by default. There is parameter "Open modal element selector" which you have to use to find the element which will trigger opening the Modal Box. Selector will be used via Javascript as a "querySelectorAll".
Basic example to make it work:
1. Add Pro Modal Box
2. Copy 'pro-modal-box-1' from selector parameter within "selector" parameter
3. Add Basic Button (it could be any other button)
4. Paste the className in the Basic Buttons parameter - "Extra class name"
5. Click on the button and you should see the Modal Box
You can use more buttons to open the same Modal Box.
