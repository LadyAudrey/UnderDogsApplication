# There is at least one country name that contains another country name. Find all of these cases

# importing the country list
from xml.etree.ElementInclude import include


countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())

#cycle through the list and compare each index to another index, add to contains_country as appropriate
for a in countries_list:
    small_a = a.lower()
    for b in countries_list:
        small_b = b.lower()
        if small_b include small_a :
    