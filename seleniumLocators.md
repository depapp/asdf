# Identifier
works with the id and name attributes of your html tags

# Id
The Id strategy looks for an element in the page having an id attribute corresponding to the specified pattern. 

# Name
Like the Id strategy, but on the name attribute. You can also specify a filter to refine your locator. Currently, there are two filter types :
*value
*index

# Link
This strategy is intended to select links only and selects the anchor element containing the specified text: link=The text of the link

# DOM
The DOM strategy works by locating elements that matches the javascript expression refering to an element in the DOM of the page.

# XPath
While DOM is the recognized standard for navigation through an HTML element tree, XPath is the standard navigation tool for XML; and an HTML document is also an XML document (xHTML). XPath is used everywhere where there is XML.

# CSS
The CSS locator strategy uses CSS selectors to find the elements in the page. Selenium supports CSS 1 through 3 selectors syntax excepted CSS3 namespaces

> https://www.protechtraining.com/content/selenium_tutorial-locators
