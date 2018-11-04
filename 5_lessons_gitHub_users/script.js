function loadGitHubUsers(searchString ) {
    fetch('https://api.github.com/search/users?q=' + searchString)
        .then(function (response) {
            return response.json();
        })
        .then(searchResultToTable)
        .catch(function (err) {
            document.getElementById('search-table').innerHTML = err;
        });
}

function searchResultToTable(users) {
    var table = '<table><tr>';
    if (users.items !== undefined) {
        if (users.items.length === 0)
        {
            table += "По запросу ничего не найдено.</tr></table>";
            return null;
        }
        else {
            var itemsLength = users.items.length < 5 ? users.items.length : 5;
            for (var i = 0; i < itemsLength; i++)
                table += '<td>' + users.items[i].login + '<img src =' + users.items[i].avatar_url + '>' + '</td>' + '</tr><tr>';
        }
        table += "</tr></table>";
        document.getElementById('search-table').innerHTML = table;
        return users;
    }
}

document.getElementById('submit-btn').addEventListener('click', function () {
    var searchString = document.getElementById('search').value;
    loadGitHubUsers(searchString);
});