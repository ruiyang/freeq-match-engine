var parserTree = {
    "AND": [
        {
            "FUNC_CALL": [
                "equal",
                "boy.age",
                "girl.age"
            ]
        },
        {
            "OR": [
                {
                    "FUNC_CALL": [
                        "equal",
                        "boy.age2",
                        "girl.age2"
                    ]
                },
                {
                    "FUNC_CALL": [
                        "equal",
                        "boy.age3",
                        "girl.age3"
                    ]
                }
            ]
        }
    ]
};
