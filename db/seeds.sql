USE burgers_db

CREATE burgers {
    id AUTO INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN(false) NOT NULL,
    PRIMARY KEY(id)
}