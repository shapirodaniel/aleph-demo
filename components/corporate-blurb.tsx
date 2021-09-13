import React from "react";

interface FancyQuotesProps {
  color: string;
  copy: string;
}

const FancyQuotes = ({ color, copy }: FancyQuotesProps) => {
  return (
    <>
      <style>
        {`
      .fancyQuote {
        font-family: "Helvetica Neue", "Times New Roman", serif;
        font-style: italic;
        font-size: 8em;
        color: ${color};
        width: 2.5em;
        padding: 0;
        margin: 0;
        height: 1em;
      }
      #left {
        text-align: left;
        margin-bottom: -.3em;
      }
      #right {
        text-align: right;
      }
      #fancyQuoteCopy {
        font-size: 2.5em;
        padding-left: .5em;
        margin: 0;
        text-align: center;
      }
      @media screen and (max-width: 400px){
        #fancyQuoteCopy {
          font-size: 2em;
          padding-left: 0;
        }
        #left {
          margin-left: -.3em;
        }
      }
    `}
      </style>
      <div className="fancyQuote" id="left">
        &ldquo;
      </div>
      <div id="fancyQuoteCopy">{copy}</div>
      <div className="fancyQuote" id="right">
        &rdquo;
      </div>
    </>
  );
};

export default function CorporateBlurb() {
  return (
    <>
      <style>
        {`
        #blurb {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: auto;
        }
        #signature {
          font-size: 1.5em;
          font-style: italic;
          text-align: right;
        }
        @media screen and (max-width: 400px) {
          #signature {
            font-size: 1em;
          }
        }
      `}
      </style>
      <div id="blurb">
        <FancyQuotes color={"white"} copy={"We're here to help!"} />
        <div id="signature">- Corporate Person, Company</div>
      </div>
    </>
  );
}
