import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyDKsrHoNRb-WkgXkG7qK2vW-NPsOaPjlNk';

  constructor(public http: HttpClient) { }

  //   getVideosForChanel(channel, maxResults) {
  //   let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
  //   return this.http.get(url)
  //     .pipe(map((res) => {
  //       return res;
  //     }))
  // }
}
