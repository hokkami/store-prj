import React from 'react'

export default function RegisterComment() {
  return (
    <div>
      <form className='register-form' autoComplete='off'>
          <div>
            {this.state.submitted && this.state.allValid && (
              <div className='success-message'>ثبت نام با موفقیت انجام شد</div>
            )}
            <input id='first-name' className='form-field-elem' type="text" value={this.state.firstNameData} onChange={(e) => this.firstNameHandler(e)} placeholder='نام' />
            {this.state.submitted && this.state.emailData.length === 0 && (
              <div>
                <span className='error-elem' id='first-name-error'>لطفا نام خود را وارد نمایید</span>
              </div>
            )}
          </div>
          <div>
            <input id='last-name' className='form-field-elem' type="text" value={this.state.lastNameData} onChange={(e) => this.lastNameHandler(e)} placeholder='نام خانوادگی' />
            {this.state.submitted && this.state.emailData.length === 0 && (
              <div>
                <span className='error-elem' id='last-name-error'>لطفا نام خانوادگی خود را وارد نمایید</span>
              </div>
            )}
          </div>
          <div>
            <input id='email' className='form-field-elem' type="text" value={this.state.emailData} onChange={(e) => this.emailHandler(e)} placeholder='ایمیل' />
            {this.state.submitted && this.state.emailData.length === 0 && (
              <div>
                <span className='error-elem' id='email-error'>لطفا ایمیل خود را وارد نمایید</span>
              </div>
            )}
          </div>
          <button type='submit' className='btn-submit' onClick={(event) => this.onSubmited(event)}>ثبت</button>
        </form>

    </div>
  )
}
