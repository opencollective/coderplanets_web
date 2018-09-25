export const ERR = {
  CRAPHQL: 'CRAPHQL',
  PARSE_CHEATSHEET_MD: 'PARSE_CHEATSHEET_MD',
  NETWORK: 'NETWORK',
  NOT_FOUND: 'NOT_FOUND',
  TIMEOUT: 'TIMEOUT',
}

export const EVENT = {
  LOGIN_PANEL: 'LOGIN_PANEL',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  PREVIEW_CLOSE: 'PREVIEW_CLOSE',
  PREVIEW_CLOSED: 'PREVIEW_CLOSED',
  // new
  PREVIEW_LOAD: 'PREVIEW_LOAD',
  PREVIEW_OPEN: 'PREVIEW_OPEN',
  // action: preview, create, update
  // new end

  // refresh
  REFRESH_COMMUNITIES: 'REFRESH_COMMUNITIES',
  REFRESH_POSTS: 'REFRESH_POSTS',
  REFRESH_JOBS: 'REFRESH_JOBS',
  REFRESH_VIDEOS: 'REFRESH_VIDEOS',

  // community
  COMMUNITY_CHANGE: 'COMMUNITY_CHANGE',

  // Draft editor
  DRAFT_INSERT_SNIPPET: 'DRAFT_INSERT_SNIPPET',
}

export const TYPE = {
  APP_HEADER_ID: 'APP_HEADER_ID',

  CHEATSHEET_ROOT_PAGE: 'CHEATSHEET_ROOT_PAGE',
  COMMUNITIES_ROOT_PAGE: 'COMMUNITIES_ROOT_PAGE',
  COMMUNITY_PAGE: 'COMMUNITY_PAGE',
  POST_PAGE: 'POST_PAGE',
  ACTIVITIES_ROOT_PAGE: 'ACTIVITIES_ROOT_PAGE',

  POST: 'POST',
  JOB: 'JOB',
  REPO: 'REPO',
  VIDEO: 'VIDEO',
  // actions
  FAVORITE: 'FAVORITE',
  STAR: 'STAR',
  WATCH: 'WATCH',
  REACTION: 'reaction',
  UNDO_REACTION: 'undoReaction',

  // preview
  PREVIEW_ACCOUNT_VIEW: 'PREVIEW_ACCOUNT_VIEW',
  PREVIEW_ACCOUNT_EDIT: 'PREVIEW_ACCOUNT_EDIT',

  PREVIEW_ROOT_STORE: 'PREVIEW_ROOT_STORE',
  PREVIEW_COMMUNITY_EDITORS: 'PREVIEW_COMMUNITY_EDITORS',

  PREVIEW_POST_VIEW: 'PREVIEW_POST_VIEW',
  PREVIEW_POST_CREATE: 'PREVIEW_POST_CREATE',
  PREVIEW_POST_EDIT: 'PREVIEW_POST_EDIT',

  PREVIEW_JOB_VIEW: 'PREVIEW_JOB_VIEW',
  PREVIEW_JOB_CREATE: 'PREVIEW_JOB_CREATE',
  PREVIEW_JOB_EDIT: 'PREVIEW_JOB_EDIT',

  PREVIEW_REPO_VIEW: 'PREVIEW_REPO_VIEW',
  PREVIEW_REPO_CREATE: 'PREVIEW_REPO_CREATE',

  PREVIEW_VIDEO_VIEW: 'PREVIEW_VIDEO_VIEW',
  PREVIEW_VIDEO_CREATE: 'PREVIEW_VIDEO_CREATE',
  PREVIEW_VIDEO_EDIT: 'PREVIEW_VIDEO_EDIT',

  // PAGE STATE
  LOADING: 'LOADING',
  NOT_FOUND: 'NOT_FOUND',
  RESULT: 'RESULT',
  RESULT_EMPTY: 'RESULT_EMPTY',
  // filters
  ASC_INSERTED: 'ASC_INSERTED',
  DESC_INSERTED: 'DESC_INSERTED',
  MOST_LIKES: 'MOST_LIKES',
  MOST_DISLIKES: 'MOST_DISLIKES',
}

export const ROUTE = {
  // NOTE: the lower-case is MUST
  COMMUNITIES: 'communities',
  CHEATSHEETS: 'cheatsheets',
  ACTIVITIES: 'activities',
  POSTS: 'posts',
  JOBS: 'jobs',
  VIDEOS: 'videos',
  USERS: 'users',
  REPOS: 'repos',

  POST: 'post',
  USER: 'user',
  JOB: 'JOB',
}

export const THREAD = {
  POST: 'post',
  JOB: 'job',
  VIDEO: 'video',
  REPO: 'repo',
  WIKI: 'wiki',
  MAP: 'map',
  CHEATSHEET: 'cheatsheet',
}

export const USER_THREAD = {
  ACTIVITIES: 'activities',
  POSTS: 'posts',
  COMMENTS: 'comments',
  FAVORITES: 'favorites',
  LINKS: 'likes',
  SETTINGS: 'settings',
}

export const ACTION = {
  FAVORITE: 'FAVORITE',
  STAR: 'STAR',
  WATCH: 'WATCH',
}

export const FILTER = {
  // when
  TODAY: 'TODAY',
  THIS_WEEK: 'THIS_WEEK',
  THIS_MONTH: 'THIS_MONTH',
  THIS_YEAR: 'THIS_YEAR',

  // sort
  MOST_VIEWS: 'MOST_VIEWS',
  MOST_STARS: 'MOST_STARS',
  MOST_FAVORITES: 'MOST_FAVORITES',
  MOST_COMMENTS: 'MOST_COMMENTS',

  ASC_INSERTED: 'ASC_INSERTED',
  DESC_INSERTED: 'DESC_INSERTED',
  MOST_LIKES: 'MOST_LIKES',
  MOST_DISLIKES: 'MOST_DISLIKES',

  // length
  MOST_WORDS: 'MOST_WORDS',
  LEAST_WORDS: 'LEAST_WORDS',
}
