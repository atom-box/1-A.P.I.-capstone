// I will treat this as a Shipyard, building my functions alongside there testing code.  
//  For now at least. Adapted from their "XPress" functions. 

const helper = {};
const express = require('express');
const app = express();
const baseUrl = 'http://localhost:4000/api';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

helper.getSeries = () => {
  const url = `${baseUrl}/series`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.series.map(seriesItem => camelcaseKeys(seriesItem));
    });
  });
};


/*helper.createSeries = series => {
  const url = `${baseUrl}/series`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({series: series})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.series);
    });
  });
};*/

helper.updateSeries = series => {
  const url = `${baseUrl}/series/${series.id}`;
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({series: series})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.series);
    });
  });
};

helper.deleteSeries = id => {
  const url = `${baseUrl}/series/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};


const stub = `/api`;
router.get(`${stub}/artists`, (req, res)=>{

});


helper.getArtists = () => {
  const results = {};
  db.all("SELECT nam FROM Artist WHERE is_currently_employed IS 1  ", 
    function(e, rows){
      if(e){
        console.log(e);
      }else{
        console.log('no-prob')
      }
      results = rows; // TO DO !!!!
    } );
  //res.artists = r e s u l t
  return results;
 };

helper.getArtist = id => {
  const url = `${baseUrl}/artists/${id}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.artist);
    });
  });
};

/* 
helper.createArtist = artist => {
  const url = `${baseUrl}/artists`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({artist: artist})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.artist);
    });
  });
};
*/

helper.updateArtist = artist => {
  const url = `${baseUrl}/artists/${artist.id}`;
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({artist: artist})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.artist);
    });
  });
};

helper.restoreArtist = artist => {
  artist.isCurrentlyEmployed = 1;
  const url = `${baseUrl}/artists/${artist.id}`;
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({artist: artist})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.artist);
    });
  });
};

helper.deleteArtist = id => {
  const url = `${baseUrl}/artists/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.artist);
    });
  });
};

helper.getSeriesById = id => {
  const url = `${baseUrl}/series/${id}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.series);
    });
  });
};

helper.getIssues = seriesId => {
  const url = `${baseUrl}/series/${seriesId}/issues`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.issues.map(issue => camelcaseKeys(issue));
    });
  });
};

/*
helper.createIssue = (issue, seriesId) => {
  const url = `${baseUrl}/series/${seriesId}/issues`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({issue: issue})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.issue);
    });
  });
};
*/

helper.updateIssue = (issue, seriesId) => {
  const url = `${baseUrl}/series/${seriesId}/issues/${issue.id}`;
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({issue: issue})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.issue);
    });
  });
};

helper.deleteIssue = (issueId, seriesId) => {
  const url = `${baseUrl}/series/${seriesId}/issues/${issueId}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

module.exports = helper;

// Not sure if I was supposed to write these from scratch.
// Their syntax is so strange, maybe I'll learn
// or not even end up using these.  Try one or two...
