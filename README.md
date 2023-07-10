## Description of the project

In this project, I created a frontend application for the medusa server. There is a project page with a list of all products, which you can filter by collections. After clicking on a specific product you will be sent to the product details page. On that page, you can see options for specific products, such as size or color, and you can choose the quantity of different product variants.

It's hard to say exactly how long it took to complete this project, but I spent a few hours after work for about 10 days.

First, I created a product detail page with possible options in the form, but this was not functional for selecting a specific product variant. So for me it was the most challenging and most fun implementation, because I had to come up with an idea to solve that problem.

When I started building this app, I decided to make a layout with a header. I then created a product page where I implemented a useEffect to retrieve the product list, but later changed that with Nextjs features to fetch data from the server. 
I already explained the way product details page was built. 

There were some considerations when implementing the filter. I wasn't sure if I should send the user to a new page when they click on a specific collection or I should implement it with a multi-select options and keep them on the current page.