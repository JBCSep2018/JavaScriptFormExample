
var editing=false;
alert("This is the first time the page is being loaded. The country list is being refreshed.");
var theSelect = document.getElementById("mySelect");
var displayCounter = document.getElementById("countrycount");

if(firstLoad)
{
    countries =['China','Ghana','Ethiopia','United States','Russia'];
}

listCountries();

function listCountries()
{
    //List countries in a dropdown
    alert(countries.length+" countries are being loaded into the select");
    for(var country in countries)
    {
        populateSelect(countries[country],country);
        formatEachCountry(countries,country);

    }
    alert("Countries added to the select");
    firstLoad=false;
    showCountryNumbers(countries.length);
}
function saveAndClear()
{
    //Checks to see if the item is being edited. If not, creates a new country.
    //Country list gets sorted after addition/modification.
    var textBoxValue = document.getElementById("textBox").value;
    if(editing)
    {
        console.log("Editing "+theSelect.value);
        countries[theSelect.value]=textBoxValue;
    }
    else
    {
        console.log("New value entered");
        countries.push(textBoxValue);
    }
    alert("Value has been saved "+theSelect.value);
    countries.sort();
    clearDropDown();
    clearTextBox();
    listCountries();
    clearTextBox();
    editing=false;
}



function formatEachCountry(countries,country)
{
    //Putting in a new country - used for display - not being used. Modify this so that it works.
    var eachCountry = countries[country];
    var newParagraph =  document.createElement("p");
    var textElement = document.createTextNode(eachCountry);
    newParagraph.appendChild(textElement);
    return newParagraph.innerHTML;
}

function populateSelect(selectText,selectValue)
{
    var select = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = selectText;
    option.value=selectValue;
    select.add(option);

}

function changeValue(){
    var selectValue = document.getElementById("mySelect").value;
    alert(selectValue);
    document.getElementById("textBox").value=countries[selectValue];
    editing=true;
}


function clearDropDown()
{
    var selectOptions = document.getElementById("mySelect");
    for(c in selectOptions)
    {
        selectOptions.remove(c);
    }
}

function clearTextBox()
{
    document.getElementById("textBox").value="";
}

function deleteCountry()
{
    alert(theSelect.value +" is being deleted:"+theSelect.options[theSelect.value].innerHTML);
    countries.splice(theSelect.value,1);
    clearDropDown();
    listCountries();
}

function showCountryNumbers(count)
{
    if(count>0)
    {
        displayCounter.innerHTML=count+" countries listed";
    }
    else{
        displayCounter.innerHTML="No countries listed";
    }

}