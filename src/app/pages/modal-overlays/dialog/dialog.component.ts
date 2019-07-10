import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';

@Component({
  selector: 'ngx-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent {
  riskYearReportList =["Year","ratio","baseline"]
  riskYearReport:{Year:number, ratio:string, baseline:string}[]=[
    {
      "Year": 1984,
      "ratio": "123.92",
      "baseline": "100"
    },
    {
      "Year": 1985,
      "ratio": "142.96",
      "baseline": "100"
    },
    {
      "Year": 1986,
      "ratio": "184.55",
      "baseline": "100"
    },
    {
      "Year": 1987,
      "ratio": "66.38",
      "baseline": "100"
    },
    {
      "Year": 1988,
      "ratio": "129.92",
      "baseline": "100"
    },
    {
      "Year": 1989,
      "ratio": "120.32",
      "baseline": "100"
    },
    {
      "Year": 1990,
      "ratio": "127.33",
      "baseline": "100"
    },
    {
      "Year": 1991,
      "ratio": "107.84",
      "baseline": "100"
    },
    {
      "Year": 1992,
      "ratio": "92.06",
      "baseline": "100"
    },
    {
      "Year": 1993,
      "ratio": "91.80",
      "baseline": "100"
    },
    {
      "Year": 1994,
      "ratio": "113.05",
      "baseline": "100"
    },
    {
      "Year": 1995,
      "ratio": "93.57",
      "baseline": "100"
    },
    {
      "Year": 1996,
      "ratio": "167.86",
      "baseline": "100"
    },
    {
      "Year": 1997,
      "ratio": "97.19",
      "baseline": "100"
    },
    {
      "Year": 1998,
      "ratio": "116.11",
      "baseline": "100"
    },
    {
      "Year": 1999,
      "ratio": "131.70",
      "baseline": "100"
    },
    {
      "Year": 2000,
      "ratio": "100.00",
      "baseline": "100"
    },
    {
      "Year": 2001,
      "ratio": "93.14",
      "baseline": "100"
    },
    {
      "Year": 2002,
      "ratio": "84.47",
      "baseline": "100"
    },
    {
      "Year": 2003,
      "ratio": "109.11",
      "baseline": "100"
    },
    {
      "Year": 2004,
      "ratio": "88.10",
      "baseline": "100"
    },
    {
      "Year": 2005,
      "ratio": "134.29",
      "baseline": "100"
    },
    {
      "Year": 2006,
      "ratio": "154.73",
      "baseline": "100"
    },
    {
      "Year": 2007,
      "ratio": "194.13",
      "baseline": "100"
    },
    {
      "Year": 2008,
      "ratio": "36.34",
      "baseline": "100"
    },
    {
      "Year": 2009,
      "ratio": "113.08",
      "baseline": "100"
    },
    {
      "Year": 2010,
      "ratio": "78.38",
      "baseline": "100"
    },
    {
      "Year": 2011,
      "ratio": "83.38",
      "baseline": "100"
    },
    {
      "Year": 2012,
      "ratio": "108.36",
      "baseline": "100"
    },
    {
      "Year": 2013,
      "ratio": "73.36",
      "baseline": "100"
    },
    {
      "Year": 2014,
      "ratio": "116.14",
      "baseline": "100"
    },
    {
      "Year": 2015,
      "ratio": "100.80",
      "baseline": "100"
    },
    {
      "Year": 2016,
      "ratio": "101.92",
      "baseline": "100"
    },
    {
      "Year": 2017,
      "ratio": "132.40",
      "baseline": "100"
    },
    {
      "Year": 2018,
      "ratio": "109.29",
      "baseline": "100"
    }
   ]

















  // names: string[] = [];

  // constructor(private dialogService: NbDialogService) {}

  // open() {
  //   this.dialogService.open(ShowcaseDialogComponent, {
  //     context: {
  //       title: 'This is a title passed to the dialog component',
  //     },
  //   });
  // }

  // open2(dialog: TemplateRef<any>) {
  //   this.dialogService.open(
  //     dialog,
  //     { context: 'this is some additional data passed to dialog' });
  // }

  // open3() {
  //   this.dialogService.open(DialogNamePromptComponent)
  //     .onClose.subscribe(name => name && this.names.push(name));
  // }

  // openWithoutBackdrop(dialog: TemplateRef<any>) {
  //   this.dialogService.open(
  //     dialog,
  //     {
  //       context: 'this is some additional data passed to dialog',
  //       hasBackdrop: false,
  //     });
  // }

  // openWithoutBackdropClick(dialog: TemplateRef<any>) {
  //   this.dialogService.open(
  //     dialog,
  //     {
  //       context: 'this is some additional data passed to dialog',
  //       closeOnBackdropClick: false,
  //     });
  // }

  // openWithoutEscClose(dialog: TemplateRef<any>) {
  //   this.dialogService.open(
  //     dialog,
  //     {
  //       context: 'this is some additional data passed to dialog',
  //       closeOnEsc: false,
  //     });
  // }
}
