# toy program to make a list of all the countries with "United" in the name

# importing the country list
countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())

# go through countries_list and add all of the ones containing "United" to countries_united
countries_united = []
for country in countries_list:
    if "United" in country:
        countries_united.append(country)
        
print("The countries' who's names contain 'United' are " + str(countries_united))