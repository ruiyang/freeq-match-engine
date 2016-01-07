# freeq-match-engine

An example server app for doing matching and filter building based on clj-freeq

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:
    ```bash
    lein ring server
    ```

## Sample request and response
### POST /matchit
minimal schema:
```javascript
{
    "rule": string
    "source-name": string
    "source-id-name": string
    "candidate-name": string
    "candidate-id-name": string
    "source": array
    "candidate": array
}
```

example request:
```javascript
    {
      "rule": "equal(boy.age, girl.age)",
      "source-name": "boy",
      "source-id-name": "name",
      "candidate-name": "girl",
      "candidate-id-name": "name",
      "source": [
        {"name": "James", "age": "20"},
        {"name": "John", "age": "25"}],
      "candidate": [
        {"name": "Mary1", "age": "21"},
        {"name": "Mary2", "age": "20"},
        {"name": "Mary3", "age": "25"},
        {"name": "Mary4", "age": "25"}]
    }
```
response:
```javascript
    {
        "result": [
            {
                "James": [
                    "Mary2"
                ]
            },
            {
                "John": [
                    "Mary3",
                    "Mary4"
                ]
            }
        ]
    }
```
### POST /parse
request:
```javascript
    {
        "rule": "equal(boy.age, girl.age)"
    }
```
response:
```javascript
   {
    "EXP": {
        "AND_EXPRESSION": {
            "FUNC_CALL": [
                "equal",
                "boy.age",
                "girl.age"
            ]
        }
    }
```
## License
To Be Added
