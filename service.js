app.service('Data', function(){
    var groups =  [
        {
            name: "group1",
            items: [
                {
                    name:  "item1",
                },
                {
                    name:  "item2",
                },
                {
                    name:  "item3",
                },
            ],
        },
        {
            name: "group2",
            items: [
                {
                    name:  "item4",
                },
                {
                    name:  "item5",
                },
                {
                    name:  "item6",
                },
                {
                    name:  "item7",
                },
            ],
        }, 
    ];

    var ungroupedItems = [
        {
            name:  "item8",
        },
        {
            name:  "item9",
        },
        {
            name:  "item10",
        },
    ]

    return {
        groups: groups,
        ungroupedItems: ungroupedItems,
    }
});
