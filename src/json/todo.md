1. figure out how to ensure that total data is not undefined
2. download created quiz in specified location, or write to already created file
3. fix default quiz answers
3. fix read me, maybe add gifs
4. remove vue router, add flask




POTENTIAL FIXES
FOR UNDEFINED DATA

render becomes a compute method


 I found out that is it easier to bind :value instead of using v-model. Then you can handle the update by catching @change.

 v-model expressions must have a get and set function. For most variables this is pretty straight forward but you can also use a computed property to define them yourself like so:

 Before the data loads siteInfo.info will be undefined, so you can't access name in the v-model:

v-model="siteInfo.info.name"
Likewise for siteInfo.accountData.name.

My suggestion would be to set the initial value of siteInfo to null and then put a v-if="siteInfo" on the main div. Alternatively you could put a v-if on the individual input elements that checks for siteInfo.info and siteInfo.accountData.

You may also want to consider showing alternative content, such as a load mask, while the data is loading.

share

https://stackoverflow.com/questions/58246789/vue-v-model-data-is-from-ajax-undefined-value



Not sure if this is the "right" way, but I got around this issue with async options by using v-if on the component to not render it until the async operation was complete.


<select v-if="items.length">
  <option v-for="item in items">{{item}}</option>
</select>

<select v-model="input">
    <option v-if="input == null" disabled :value="null">Select an option</option>
...
</select>



