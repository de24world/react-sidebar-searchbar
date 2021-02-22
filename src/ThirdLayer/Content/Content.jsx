import React, { forwardRef } from "react";
// import PropTypes from "prop-types";
import "./Content.scss";

const Content = ({ scrollToabout }, ref) => {
  return (
    <div className="Content">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
      <p>19</p>
      <p ref={ref}>20</p>
    </div>
  );
};

Content.propTypes = {};

export default forwardRef(Content);
