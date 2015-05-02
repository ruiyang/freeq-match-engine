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
                        "boy.age",
                        "girl.age"
                    ]
                },
                {
                    "FUNC_CALL": [
                        "equal",
                        "boy.age",
                        "girl.age"
                    ]
                }
            ]
        }
    ]
};
