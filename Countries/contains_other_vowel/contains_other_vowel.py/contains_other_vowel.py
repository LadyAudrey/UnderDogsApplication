# There is at least one country name that contains another country name. Find all of these cases

# importing the country list
from xml.etree.ElementInclude import include


countries = open("/home/evergreen/UnderDogsAssignments/Countries/countries.txt")

#turning countries.doc into an array
countries_list = []
for line in countries:
    countries_list.append(line.strip())
contains_country = {}

# add to contains_country as appropriate
for country in countries_list:
    # print("line 17" + str(country))
    lowercase_country = country.lower()
    for comparison_country in countries_list:
        lower_case_comparison_country = comparison_country.lower()
        if lower_case_comparison_country == lowercase_country:
            continue
        elif lower_case_comparison_country in lowercase_country:
            contains_country.update({lowercase_country:lower_case_comparison_country})

print(contains_country)
            