---
id: createEquivalenceClassTable
title: Create an equivalence class tables from scratch
sidebar_label: Create an equivalence class table
---


This tutorial teaches you how to create an equivalence class table from scratch.
It does not yet use any test data creation functionality.

The goal is to transfer the requirements from a specification into a table.
As an example, we would like to test the creation of a userId and password for
a virtual application. The user can freely choose the userId and the password.

The next chapter will show the specification for this application dialog. Step by step we will then create the equivalence class table.

## User account creation

The example use case in this tutorial is to create tests for the user id creation.
The application is a website where a user can enter their userId, a password, and re-enter the latter for verification.

The following three chapters show the specification for each field of our demo application.

### User ID

  - The user is able to choose their own id.

  - The id must have a minimum length of two characters.

  - The user id must not contain spaces.

  - The beginning or at the end will be trimmed.

  - The id must not exceed a length of 30 characters.

  - The id must not already exist.

  - Only ascii characters (a-z|A-Z), numbers, hyphen and underscores are allowed.

  - The user name is case insensitive.

### Password

The password has to meet the following requirements:

  - The password must not have leading or trailing spaces.

  - The password is required.

  - It must have a minimum length of 5 characters.

  - It must not exceed a length of 20 characters.

  - All characters are allowed.

  - It must not equal, start, or end with the user id.

  - It must contain at least one number, one upper case letter, one lower case letter, and one special character.

### Second password field

The second password has the same requirements as the first password field, with one additional restriction:

  - The password must equal the first password

##   Create an initial table

Create an empty spreadsheet and enter all the fields from the specification. When entering the fields, leave some empty rows between each field.
The following fields should be entered in the first column:

1.  userId

2.  password

3.  password2

The sheet should look similar to this:

![step1](/img/tutorials/t1/step1.png)

##   Fill the equivalence class data

For each field we need to create the equivalence classes. This is a group of values to which the application behaves equivalent to.

  - Example 'too many characters'  
    The application reacts in the same way, no matter if there is one character too many or if there are 20 characters too many.

To get these values you need to read the specification and extract the classes from it.
All the classes should be added to the spreadsheet in the second column under the field they belong to.
In the third column you have the possibility to enter a description for the class.
Let’s start with the user id.

  - userID equivalence classes
    
      - empty  
        No values entered at all.
    
      - too short  
        The spec says: 'The id must have a minimum length of two characters.'
    
      - too long  
        The id must not exceed 30 characters
    
      - id with space  
        The spec says: 'The user id must not contain a space', so we need to create an id containing a space.
    
      - leading space  
        An id with leading space or spaces. As the id will be trimmed, we also should consider an ID with a leading
        space that is too short. We expect the application tp check the length after trimming.
    
      - too short but with leading space or spaces
    
      - trailing space or spaces
    
      - too short but with trailing space or spaces
    
      - not too long but leading spaces  
        The user id without the spaces matches the max length constraint.
    
      - not too long but trailing spaces
    
      - invalid chars  
        Spec: 'Only ascii characters are allowed (a-z) and also numbers, hyphen, and underscores'.
    
      - existing userId  
        spec: 'The id must not exist.'
    
      - existing userId different case  
        spec: 'The user name is case insensitive.'
    
      - valid user id  
        Finally, we need a valid user Id.

  - password equivalence classes  
    Some of the classes can be copied more or less from the user id field.
    
      - empty
    
      - too short
    
      - too long
    
      - with leading space  
        In this case the application will not trim the spaces since they are not allowed.
    
      - with trailing space  
    
      - starts with the userId
    
      - ends with the userId
    
      - missing upper case letter
    
      - missing lower case letter
    
      - missing special character
    
      - missing number
    
      - valid password

  - password2 equivalence classes  
    In this case we can copy all the classes from the first password field and
    add some additional classes.
    
      - empty
    
      - too short
    
      - too long
    
      - with leading space  
        In this case the application will not trim the spaces since they are not allowed.
    
      - with trailing space  
    
      - starts with the userId
    
      - ends with the userId
    
      - missing uppercase letter
    
      - missing lower case letter
    
      - missing special character
    
      - missing number
    
      - valid password
    
      - valid password but different to the first password

Now the table should look like this:

![step2](/img/tutorials/t1/step2.png)

Also note the added header row.

##   Add calculations and prettify the table

Now that we have all the equivalence classes filled by field, we are able to
calculate how many test cases are necessary to test this functionality.

In order to do so, we multiply the number of equivalence classes for each field.

  - userid has 16 classes

  - password has 12 classes

  - password2 has 13 classes

So the number of test cases is 16\*12\*13 = 2496.
This is a lot to test. Could this be optimized? If so, how can it be optimized without losing test coverage? Here is where the main benefit of the equivalence class table technique comes through.

First, we will add some formulas to the spreadsheet to do the calculations.

![step3 formula](/img/tutorials/t1/step3_formula.png)

The numbers count the number of classes in each field. Do this for each of the fields.
Also add a row at the end which shows the result of the multiplication.

![step3 format](/img/tutorials/t1/step3_format.png)

As you can see in the figure above, the field rows are highlighted in color. To the right, we added four new columns with the names 1, 2, 3 and 4.
These are the test case columns. Each column represents one test case.
The formula from column B is copied into each of the new test case columns.
As there is no value entered in the column, it shows '0' for all of the columns.

##   Start filling the table with decisions

The table is prepared and ready to be used.
Let’s start making decisions.

We need to choose one equivalence class per field and combine them.

To make things a little easier, it's a good idea to enter an additional formula in the 'result' row 'C47'.
The formula sums up all results in the 'Summary' row '=SUM(D47:W47)'.

### Test case 1

From the field 'userId' we only choose the first row with the class 'empty'. To do this, enter an 'x' in the column 'D'.

We expect that when no userId is given, it doesn’t matter what we will enter in 'password' or 'password2'; the application will react in the same way. So let’s enter this information into the table.

Enter an 'e' in all the classes of field 'password' and 'password2' fields.

> **Note**
> 
>   - 'x' means 'choose exactly this equivalence class for this field.'
> 
>   - 'e' means 'choose any of the equivalence classes of this field.'

The result is shown in the last row named 'Summary'. There we can see '156'. So this test case eliminates 156 test cases of the total possible number of '2496'.

Now you can repeat this with the second test case.

### Test case 2

Choose 'too short' for the userId and do the same as for test case '1' for the rest of the fields.

And again we have 156 test cases taken care of.

### Test case 3 to 11

You can do the same pattern for all the cases where a value in 'userId' causes
an error. In each of these cases the value entered in the password fields
is not relevant.

![step4](/img/tutorials/t1/step4.png)

In column 'C' in row '47' we can see that these 11 test cases cover 1716 cases. The goal of the table is to obtain 100%. We need to add more test cases to cover all of them. However, as the table fills up, the amount of test coverage per test case will decrease.

##   Add a 'result' section

So far, we have defined how we think the application
behaves, but it is not shown in the table. For this, add new rows under the 'Summary' row.

Add the following rows

    Result
        Valid
        Error   The UserId must not be empty
        Error   The UserId must have at least two characters
        Error   The UserId must not exceed the length of 30 characters
        Error   The UserId must not contain white space characters

![step5 resultRows](/img/tutorials/t1/step5_resultRows.png)

The result section is not necessary to fill the equivalence class  table, but it is a possibility to define the expected error messages for the application. It has also serves a documentation purpose.

For each test case we can now specify the expected behaviour.

![step5 withResuts](/img/tutorials/t1/step5_withResuts.png)

##   Cleaning up the table

As the table grows, it will become increasingly difficult to build combinations.
So it is very helpful if the table follows a certain pattern (which is not always possible).
In our case, we started with the invalid user ids. But in the rows 8,9,14,15 and 19 there are valid cases.

It makes sense to reorder the equivalence classes, so that the fields representing
valid cases are at the end of the table.

![step6](/img/tutorials/t1/step6.png)

Also more descriptions are added in order to clearify that these are valid cases.

It's now time to combine the first valid user Id with the different possibilities of 'password' and 'password2'.

## Testcase 12

Choose the 'leading spaces' equivalence class of field 'userId' or any other equivalence class as long as it is a valid one.
In 'password' choose the 'empty' class. As the 'password' is a mandatory
field, we can fill the 'password2' field with 'e'.

Then add a new result row with the expected error messages.

![step6 tc12](/img/tutorials/t1/step6_tc12.png)

In the table you can now use the same logic for 'password' as we did before for 'userId' before. So fill up the next test cases for all the error cases of 'password'.

![step6 tc12 22](/img/tutorials/t1/step6_tc12-22.png)

## Iterate over the 'password2' field

The following procedure depends on how the application works. Will it first validate that password2
is different form the first password field or does it first do the same checks as for the first password input?

In this example, we do the full iteration of all the classes for password2 as well. Take the valid class of 'password' and create a test case for all the error cases of 'password2'

Now the table should look like this:

![step7](/img/tutorials/t1/step7.png)

We also added a new error message for the case in which the passwords are different.
When adding new test cases, always remember to update the formula for summarizing the created test cases.

## Reorder the rows for 'password2'

After filling out the cells for password2, we can see that the second to last
row is a valid case, but the last row is an invalid case. So these two rows need to
be swapped.

Now we have to fill out the valid case. This would be test case 35. After this, we can see that there are 624 test cases missing. This is because of the missing rows in 'userId'. There we have five different kinds of valid cases. One of them we have used for the error cases of 'password' and 'password2'. To complete the equivalence class table we have two possibilities:

1.  Copy the columns with the test cases 12-35 and insert them four times. Then
    change the equivalence class for the 'userId' so that all the cases are covered.
    This results in 131 test cases.

![step8 2](/img/tutorials/t1/step8_2.png)

The picture gives an idea of what this looks like.

To optimize the testing procedure we should consider not to iterate over all of the valid cases to check the errors of 'password' and 'password2'. Instead, we can simply take any valid userId. For this, we fill all the cells of rows 15-19
with the test cases 12-34 with an 'e'. Then we only iterate the valid cases. This results in 39 test cases.

![step8 3](/img/tutorials/t1/step8_3.png)
