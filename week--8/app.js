// The goal is render a github informations on a page with: Promises, Map and Reduce.
// Take a look to the GitHub API Documentation to know where to fetch the informations.


//----constructor function

	function GitHubUser (username) {
		this.username = username;
	}
//-------add method to the construcor prototype
  GitHubUser.prototype.getUserInformation = function () {


		return fetch('https://api.github.com/users/' + this.username)
            .then(res => res.json())
	};

//-------add method to the construcor prototype
	 GitHubUser.prototype.getRepos = function(gitUser) {

		return fetch('https://api.github.com/users/' + gitUser.username + "/repos")
				    .then(res => res.json())
	}

///--------render html to show the reop of construcor object
	function Render(gitUser) {

      let html = '';
      html += gitUser.repos.map(function(value){
			return `<div>${value.name}<br><br></div>
							<div>forks ${value.forks_count} </div>
								<div>stars: ${value.stargazers_count} </div>`})
                   document.querySelector(".githubView").innerHTML = html;
	                }


	// Expecting
	let gitUser = new GitHubUser('ideabile');

	gitUser.getUserInformation(gitUser)
		.then(function(userInfo) {
			gitUser.user = userInfo;
			return gitUser.getRepos(gitUser);
		})
		.then(repos => {
			gitUser.repos = repos;
        	Render(gitUser);
		});
