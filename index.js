var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg',
    coverPhotoURL: 'https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500',
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
    avatarURL: 'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
    coverPhotoURL: 'https://pbs.twimg.com/profile_banners/50393960/1672784571/1500x500',
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

const users = {user1, user2};

const searchParams = new URLSearchParams(window.location.search);
console.log(users[searchParams.get('user')]);
const selectedUser = users[searchParams.get('user')];


var head = document.createElement('div');
head.id = 'head';
document.body.appendChild(head);
head.innerHTML = `
<div class = 'head-arrow'>⇤</div>
<div class="head">
<h3>${selectedUser.displayName}☑</h3>
<p>13.6k tweets</p>
</div>
`

var coverPhoto = document.createElement('div');
coverPhoto.id = 'coverPhotoContainer';
document.body.appendChild(coverPhoto);
coverPhoto.innerHTML = `
<img id='cover-photo' src='${selectedUser.coverPhotoURL}'>
<img id='round-photo' src='${selectedUser.avatarURL}'>
<button id='follow'> Following</button>
`

var profile = document.createElement('div');
profile.id = 'profile';
document.body.appendChild(profile);
profile.innerHTML = `
<h3>${selectedUser.displayName}☑</h3>
<p>${selectedUser.userName}</p>
<div class='space'>
<p>Joined ${selectedUser.joinedDate}</p>
<p><strong>${selectedUser.followingCount}</strong> Following <strong>${selectedUser.followerCount}</strong> Followers</p>
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
selectedUser.tweets.forEach((tweet) => {
    tweets.innerHTML += `
    <div id = 'tweetContainer'>
        <div class='tweet-area'>
            <img id = 'tweet-photo' src='${selectedUser.avatarURL}'>
            <h4>${selectedUser.displayName}☑</h4><br>
            <p> ${selectedUser.userName}· </p> 
        <div id = 'tweet-content'>
            <p> ${tweet.timestamp}</p>
            <p> ${tweet.text}</p>
        </div>
        </div>
        <div id = 'bottom-tweet-area'>
            <p>💬</p>
            <p>🔁</p>
            <p>♡</p>
            <p>↥</p>
        </div>
        
    </div>
`
});
