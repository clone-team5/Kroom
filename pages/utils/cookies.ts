import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from "next";

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge === 'number') {
    // 1시간 쿠키 유지
    options.expires = new Date(Date.now() + 360000)
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}
