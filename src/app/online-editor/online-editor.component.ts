import { Component, OnInit,ViewChild } from '@angular/core';
import { OnlineCompilerService } from './online-compiler.service';
import { RouterModule,Route} from '@angular/router';
import { Http , Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-online-editor',
  templateUrl: './online-editor.component.html',
  styleUrls: ['./online-editor.component.css']
})
export class OnlineEditorComponent implements OnInit {
  @ViewChild('editor') editor;
  constructor(private _http:Http,private onlineCompilerService:OnlineCompilerService){}
  text: string = "";
  languageList:any;
  selectedLanguage:any;
  ngOnInit(){
      this.languageList=this.onlineCompilerService.getLanguages().subscribe(result => {
          console.log("code run status>", result);
          this.languageList = result;
      });
  }
  ngAfterViewInit() {
          this.editor.setTheme("eclipse");
   
          this.editor.getEditor().setOptions({
              enableBasicAutocompletion: true
          });
   
          this.editor.getEditor().commands.addCommand({
              name: "showOtherCompletions",
              bindKey: "Ctrl-.",
              exec: function (editor) {
   
              }
          })
      }
      data:any;
  submitData(text){
      console.log("langId--->", this.selectedLanguage,text);
      
       this.data={
          "language_id":this.selectedLanguage,
          "source_code":text
      }
      console.log("datat--->", this.data);
      this.onlineCompilerService.SubmitRequest(this.data);
      // console.log("datat--->", data);
      // let headers = new Headers();
      // headers.append("Content-type", "application/json")
      // this._http.post("https://api.judge0.com/submissions",data, {headers: headers})
      // .map(res=>res.json())
      // .subscribe(result => {
      //     setTimeout(() => {     
      //         console.log("code submmit Response ....", result );
      //         this._http.get("https://api.judge0.com/submissions/" + result.token)
      //         .map(res=>res.json())
      //         .subscribe(result => {
      //             console.log("code run status>", result);
      //         });
      //     }, 5000);
      // });
  }
}
