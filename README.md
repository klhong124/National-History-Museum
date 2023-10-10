This task is spread between two Vue components.

GENERAL GUIDELINES

- Use Vue 2 and the Options API
- Use ES6 notation
- Use SCSS
- Use BEM for classes if possible
- Using Typescript is *not* necessary
- Using Lodash would make some functions a lot easier! (https://lodash.com/doc  s/4.17.15)
- We've added a bit of code for context, do what you want with it. Feel free to modify or move if you think something else is better. However, please do not modify the arrays/objects in "data()"
- We do not expect things to be working fully or look perfect but the code added and the approach need to make sense, and there needs to be some evidence that user experience was considered
- If at any point you want to do something but you do not have a package imported, just mock it out in the code as best you can and/or put a comment about what you would have done if you'd had the package available.



CONTEXT

You manage a natural history museum website. The museum has a set of web pages, each with a theme, and containing a list of that theme's highlights within the museum's exhibits. These pages include Dinosaurs, Space, Oceans, and Wildlife.

For example:
On the Space page, you have a list of cards, each with a space-related subject found in the museum, like asteroids, comets, black holes, stars, etc...
On the Dinosaur page, you have a list of cards, each with a dinosaur referencing fossils found in the museum.
On the Wildlife page, you have a list of cards, each with an animal.

The museum also works with partners and has set up an API where the museum website receives data related to one of these pages. For example, the museum partners with an observatory in Hawaii and receives some Space highlights from them that need to be mixed in with the museum's own data.

In the email, there should also be a basic sketch of what the Space page would look like, if that helps to visualize!



YOUR GOAL

Display the Space page highlights on cards in a list using the museum's data combined with data from the partner's API. Sample data is found in "Data()" and since we don't have any backend, pretend it was loaded in. Also to keep it simple, there are only a few highlights there, but there could be hundreds. Note: The data is intentionally in different formats.



REQUIREMENTS

1. Cards displaying highlights from the space partners' API should have a different color branding from those in the museum's own data.

2. While in this case the card only needs to work for the Space page, the card component needs to be done in such a way that it would be easily expandable to the other pages. The museum could have X number of pages and they could continually be adding new ones. As a developer, you don't know what those pages might be.

2.1.    Each page has a special badge in the top right corner of the card. This badge is different on every page, and could be an image, or some styled html elements, or a Font Awesome icon. The Space page has an image of a star. The Dinosaur page has a Font Awesome icon inside a circle. The Oceans page has two Font Awesome icons, a wave and a fish together. And so on...

2.2     The data on the different pages (Space, Dinosaurs...) have commonalities but also differences. All highlights have a name, image, date they were posted, a brief description, and perhaps associated news. But all pages also have extra unique data. For example, on the space page, some highlights also include a link to a quiz on the topic. On the dinosaur card, we have a "Period" key to indicate when that dinosaur lived. On the Wildlife page, we have several additional keys: "Location", "Species", and "Endangered status".

3. Each card should have a "Refresh image" button which, when clicked, will replace that card's current image with a new image fetched from an API.

3.1     When implementing this functionality, assume that you have already received the new image from the API. E.g. const newImage = await getNewImage(); where you do not need to implement the getNewImage() function.

3.2     You only need to implement the code which will replace the current image with the new image for the relevant card.

4. The cards should be arranged in order of date created, with the most recent first.


Follow the requirements and also complete any prompts in the two component files. You can return these two files with the content filled in, or copy and paste the relevant code and create something on Github, or in JSFiddle.

