# extension-soundcloud-sort

#### Chrome extension that injects the option of sorting into the New & Hot Chart page on SoundCloud.com
##### Install it from [here](https://chrome.google.com/webstore/detail/sound-cloud-sort/ocdlgkpkfpkahhkjcjgfjkbeebhdfama) if you'd like
Extension automatically listens for changes on the base soundcloud.com domain until the `window.location.href` matches the charts url scheme. Reason for that is soundcloud is a single page site that uses tons of async calls to fetch and display the site's content. 

---
##### Here's an example of SoundCloud _without_ the extension
![alt text](https://github.com/Aystub/extension-soundcloud-sort/blob/master/screenshots/Without.png "Without")

##### Here's an example of SoundCloud _with_ the extension
![alt text](https://github.com/Aystub/extension-soundcloud-sort/blob/master/screenshots/With.png "With")

---

#### License 
* For all intents and purposes consider this part of the Apache 2.0 license. Do whatever you want with it. <br>
* The icon used in this project follows the Linkware license and requires a backlink to: http://www.pelfusion.com 
