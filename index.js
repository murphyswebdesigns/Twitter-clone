var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};


var head = document.createElement('div');
head.id = 'head';
document.body.appendChild(head);
head.innerHTML = `
<h3>${user1.displayName}</h3>
<p>13.6k tweets</p>
`

var coverPhoto = document.createElement('div');
coverPhoto.id = 'coverPhoto';
document.body.appendChild(coverPhoto);
coverPhoto.innerHTML = `
<img id='cover-photo' src='/Users/rickysprafkin/Downloads/your-turn-dynamic-twitter/assets/elonmusk-cover.jpeg'>
<img id='round-photo' src='/Users/rickysprafkin/Downloads/your-turn-dynamic-twitter/assets/elonmusk.jpg'>
<button id='follow'> Following</button>
`

var profile = document.createElement('div');
profile.id = 'profile';
document.body.appendChild(profile);
profile.innerHTML = `
<h3>${user1.displayName}</h3>
<p>${user1.userName}</p>
<div class='space'>
<p>Joined ${user1.joinedDate}</p>
<p>${user1.followingCount} Following ${user1.followerCount} Followers</p>
</div>
<div class='tabs'>
<h4>Tweets</h4>
<h4>Tweets & replies</h4>
<h4>Media</h4>
<h4>Likes</h4>
</div>
`


var tweets = document.createElement('div');
tweets.id = 'tweets';
document.body.appendChild(tweets);
tweets.innerHTML = `
<div class='tweet-area'>
    <h4>${user1.displayName} </h4> 
    <p> ${user1.userName}</p> <br>
    <p id = 'border'> ${user1.tweets}</p>
    
</div>
`