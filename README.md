In this assignment let's build an **volopay card ** 

<summary> Functionality to be added</summary>

The app must have the following functionalities 

- ** All Route ** 
-when all route initial app open shoul be in all route in all route tabs click the all views in UI
-IN all route Header also
-in all route i have implemented on filter section also
-in filter section when youser click search elemnet and enter any text(name) the corresponding card should be display
-in anther filter section is clicked the popup display
-in the popup section have chechbox and selection option are there
when youser select any opntion that corresponding card filter and display the UI
-and also implemented Block button the block button clicked that card added to the block section and also card color shuold display on red but it is not persisted color 


** Your Route ** 

- in your route section clicked that corresponding user card should be displayed

** Block Route **

-in block card when youser click block button in All route that card should be displayed in the block section

====== All route Api response=============

#### Response
--URL
### https://636df5d6b567eed48ace4185.mockapi.io/all

```json
[
   name: 'Mixmax',
   budget_name: 'Software subscription',
   owner_id: 1,
   spent: {
       value: 100,
       currency: "SGD"
   },
   available_to_spend: {
       value: 1000,
      currency: "SGD"
   },
   card_type: "burner",
   expiry: 9 feb,
   limit: 100,
   status: 'active'
]
```

