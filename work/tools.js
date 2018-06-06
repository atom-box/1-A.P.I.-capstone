// Adapted from their "XPress" functions. 

const helper = {};
const baseUrl = 'http://localhost:4000/api';

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

helper.createSeries = series => {
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
};

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

helper.getArtists = () => {
  const url = `${baseUrl}/artists`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.artists.map(artist => camelcaseKeys(artist));
    });
  });
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
